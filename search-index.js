crystal_doc_search_index_callback({"repository_name":"github.com/XiKuuKy/Avolution","body":"# Avolution\n\nAvolution is a tool that makes programming in Crystal more fun.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n```yaml\ndependencies:\n  Avolution:\n    github: xikuuky/Avolution\n```\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"Avolution\"\n\n# check spec for more examples\nAvolution.bputs(\"Hello, world!\")\nAvolution.eputs(\":heart:\")\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/xikuuky/Avolution/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [xikuuky](https://github.com/xikuuky) - creator and maintainer\n","program":{"html_id":"github.com/XiKuuKy/Avolution/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/XiKuuKy/Avolution","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/XiKuuKy/Avolution/Avolution","path":"Avolution.html","kind":"module","full_name":"Avolution","name":"Avolution","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"Avolution.cr","line_number":5,"url":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr"}],"repository_name":"github.com/XiKuuKy/Avolution","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[{"html_id":"github.com/XiKuuKy/Avolution/Avolution","kind":"module","full_name":"Avolution","name":"Avolution"}],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"aputs(s:String)-instance-method","html_id":"aputs(s:String)-instance-method","name":"aputs","doc":"puts text that will get your attention","summary":"<p>puts text that will get your attention</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L57","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L57","def":{"name":"aputs","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"puts(((s.colorize.mode(:blink)).mode(:underline)).mode(:bold))"}},{"id":"bputs(s:String)-instance-method","html_id":"bputs(s:String)-instance-method","name":"bputs","doc":"puts bold text","summary":"<p>puts bold text</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L42","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L42","def":{"name":"bputs","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"puts(s.colorize.mode(:bold))"}},{"id":"eputs(s:String)-instance-method","html_id":"eputs(s:String)-instance-method","name":"eputs","doc":"finds :emoji: and emojicizes it before puts-ing it.","summary":"<p>finds :emoji: and emojicizes it before puts-ing it.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L10","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L10","def":{"name":"eputs","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"puts(Emoji.emojize(s))"}},{"id":"ilisam(&block)-instance-method","html_id":"ilisam(&amp;block)-instance-method","name":"ilisam","doc":"passes arguments 1 then 2 then 3 to a block\n\n```\nAvolution.ilisam do |i|\n  puts i\nend\n```\n\nreturns\n\n```\n1\n2\n3\n```","summary":"<p>passes arguments 1 then 2 then 3 to a block</p>","abstract":false,"args":[],"args_string":"(&block)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L29","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L29","def":{"name":"ilisam","args":[],"double_splat":null,"splat_index":null,"yields":1,"block_arg":null,"return_type":"","visibility":"Public","body":"yield 1\nyield 2\nyield 3\n"}},{"id":"iputs(s:String)-instance-method","html_id":"iputs(s:String)-instance-method","name":"iputs","doc":"puts blinky/interupting text","summary":"<p>puts blinky/interupting text</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L52","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L52","def":{"name":"iputs","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"puts(s.colorize.mode(:blink))"}},{"id":"number?(something)-instance-method","html_id":"number?(something)-instance-method","name":"number?","doc":"is my boi here a number?","summary":"<p>is my boi here a number?</p>","abstract":false,"args":[{"name":"something","doc":null,"default_value":"","external_name":"something","restriction":""}],"args_string":"(something)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L67","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L67","def":{"name":"number?","args":[{"name":"something","doc":null,"default_value":"","external_name":"something","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"something.is_a?(Number)"}},{"id":"string?(something)-instance-method","html_id":"string?(something)-instance-method","name":"string?","doc":"is my boi here a string?","summary":"<p>is my boi here a string?</p>","abstract":false,"args":[{"name":"something","doc":null,"default_value":"","external_name":"something","restriction":""}],"args_string":"(something)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L62","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L62","def":{"name":"string?","args":[{"name":"something","doc":null,"default_value":"","external_name":"something","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"(typeof(something)) == String"}},{"id":"symbol?(something)-instance-method","html_id":"symbol?(something)-instance-method","name":"symbol?","doc":"is my boi here a symbol","summary":"<p>is my boi here a symbol</p>","abstract":false,"args":[{"name":"something","doc":null,"default_value":"","external_name":"something","restriction":""}],"args_string":"(something)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L72","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L72","def":{"name":"symbol?","args":[{"name":"something","doc":null,"default_value":"","external_name":"something","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"(typeof(something)) == Symbol"}},{"id":"uputs(s:String)-instance-method","html_id":"uputs(s:String)-instance-method","name":"uputs","doc":"puts underlined text","summary":"<p>puts underlined text</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L47","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L47","def":{"name":"uputs","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"puts(s.colorize.mode(:underline))"}},{"id":"xor?(a,b)-instance-method","html_id":"xor?(a,b)-instance-method","name":"xor?","doc":"logical xor","summary":"<p>logical xor</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":""},{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":""}],"args_string":"(a, b)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L77","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L77","def":{"name":"xor?","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":""},{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if a & b\n  return false\nelse\n  if a | b\n    return true\n  else\n    return false\n  end\nend"}}],"macros":[{"id":"twice(function)-macro","html_id":"twice(function)-macro","name":"twice","doc":"execute function twice","summary":"<p>execute function twice</p>","abstract":false,"args":[{"name":"function","doc":null,"default_value":"","external_name":"function","restriction":""}],"args_string":"(function)","source_link":"https://github.com/XiKuuKy/Avolution/blob/6b4207e90e0f15e2f5f7aac23805876f6963afcd/src/Avolution.cr#L36","def":{"name":"twice","args":[{"name":"function","doc":null,"default_value":"","external_name":"function","restriction":""}],"double_splat":null,"splat_index":null,"block_arg":null,"visibility":"Public","body":"    \n{{ function }}\n\n    \n{{ function }}\n\n  \n"}}],"types":[]}]}})