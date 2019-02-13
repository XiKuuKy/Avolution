require "./spec_helper"

describe Avolution do
  Avolution.eputs("hello :smile:")
  Avolution.eputs("we :heart: our users")
  Avolution.ilisam do |i|
    puts i
  end

  Avolution.twice(puts "hi")

  Avolution.bputs "hello..."
end
