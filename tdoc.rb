#coding:utf-8

class TangramIntellisenseGen
	require 'iconv'
	require 'date'
	class ::String
		def extract!(pattern)
			begin
				ret = self[pattern]
				self[pattern] = ""
				self.strip!
				ret
			rescue
				""
			end
		end
	end
	class ADoc
		def initialize()
			@summary = []
			@remark = []
			@param = []
			@config = []
			@param_list = []
		end
		attr_accessor :summary,:name,:function,:param,:return,:namespace,
			:grammar,:property,:meta,:see,:remark,:NS
		
		public		
		def to_s
			name.nil? ? to_prop : to_fn
		end

		def to_fn
			params = parse_params
			plist = @param_list.join(",")
			if @grammar and @grammar[/\(.*?\)/]
				plist = @grammar[/\(.*?\)/].gsub(/[\(\)\[\]]/,"")
			end
			[
			"#{@name} = function(#{plist}){",
				parse_summary.join("\n"),
				params,
				parse_return,
			"};"
			].join("\n")
		end

		def to_prop
			txt = []
			ns = namespace
			if ns
				txt << "#{namespace.split.first}.#{property.split.first} = null; //#{property.split[1..-1]}"
			else
				code = grammar.gsub("@","")
				value = case code.split(".").last
					when /^is/ then "true"
					when /^on/ then "function(){}"
					else "0"
				end
				txt << "#{code} = #{value}; //#{property}"
			end
		end

		private
		def	parse_summary
			xml = ["	/// <summary>"]
			xml += @summary.map{|e|"	/// #{e.gsub(/^\[|\]$/,"")}"}
			xml << %[	/// #{@grammar};#{@version ? "(v#{@version})" : ''}]
			xml << "	/// </summary>"			
			unless @remark.empty?
				xml << "	/// <summary>"
				xml += @remark.map{|e|"	/// #{e}"}
				xml << "	/// </summary>"
			end
			unless @config.empty?			
				xml << "	/// <summary>options: "
				xml += @config.map{|e|"	/// <para>#{e.gsub(/\s+/,' ').gsub(/[\{\}\[\]]/,'')}</para>  "}
				xml << "	/// </summary>"
			end
			xml
		end
		def parse_params
			return nil if @param.nil?
			xml = []
			@param.each do |p|
				type = p.extract!(/\{.*?\}/).gsub(/[\{\}]/,"")
				name = p.extract!(/\[?[a-zA-Z_$.]+\]?/).gsub(/[\[\]]/,"")
				name = "param" if name.nil? or name.empty?
				
				optional = name["["]				
				name = "param" if name !~ /[a-zA-Z$_]+/
				@param_list << name if not optional
				xml << %[	/// <param type="#{type}" name="#{name}">#{p}</param>]
			end
			xml
		end
		def parse_return			
			ret = @return || @returns
			return nil if ret.nil?
			type = ret.extract!(/\{.*?\}/).gsub(/[\{\}]/,"")
			%[	/// <returns type="#{type}">#{ret}</returns>]
		end
	end

	NS = "baidu"
	MultilineCommentPat = /^\s*\/\*+(.*?)\*+\//mx

	def initialize(filename)
		@adocs = []
		@packages = []
		parse(File.read(filename))
		@packages << "#{NS}.platform" << "#{NS}.browser" #patch
	end	
		
	def parse(src)
		src.scan(MultilineCommentPat).flatten.each_with_index do |comment,index|
			doc_found = false
			adoc = ADoc.new
			comment.split("\n").each do |line|
				line = line.sub(/^\s*\**/,"").strip
				next if line.length == 0
				next if line=~/^@[a-z]+$/
				doc_found = true if line[/^@/]
				if not doc_found
					adoc.summary << line	
				elsif not adoc.remark.empty?
					adoc.remark << line
				else
					if line=~/^(@[a-z]+)/
						attr = $1
						line.extract!(/^(@[a-z]+)/)
						segment = line#.strip
						
						#patch
						attr = "@config" if attr=="@param" and segment["options."]

						a = adoc.instance_variable_get(attr)
						if a.is_a? Array
							a << segment
							adoc.instance_variable_set(attr,a)
						else							
							adoc.instance_variable_set(attr,segment)
						end
					end
				end
			end
			@adocs << adoc if doc_found
			if adoc.name and adoc.name[NS]
				package = adoc.name.split(".")[0,2].join(".")
				@packages <<  package unless @packages.include?(package)
			end
		end
	end

	public
	def generate()
		title = "//-* Vsdoc for Tangram #{DateTime.now.strftime('%Y-%m-%d %H-%M-%S')} Generated *-"
		xml = [
		"//"+"-"*title.length,
		title,
		"//"+"-"*title.length]
		xml << "T = #{NS} = {};\n"
		max = @packages.map{|e|e.size}.max
		xml << @packages.map{|e|"#{e.ljust(max)} = #{e} || {};"}
		xml << "\n"
		xml << @adocs.reject{|e|e.property.nil?}.map{|doc|doc.to_s}.join("\n") << "\n"
		xml << @adocs.reject{|e|e.name.nil? or e.name["_"]}.map{|doc|doc.to_s}.join
		xml.join("\n")
	end
end

if $0 == __FILE__
	#puts Iconv.iconv("gbk","utf-8",TangramIntellisenseGen.new(ARGV.first).generate)
	puts TangramIntellisenseGen.new(ARGV.first).generate
end
