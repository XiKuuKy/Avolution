require "./spec_helper"

describe Avolution do
  Avolution.eputs("hello :smile:")
  Avolution.eputs("we :heart: our users")
  Avolution.ilisam do |i|
    puts i
  end

  Avolution.twice(puts "hi")

  Avolution.iputs "hello... blinking"
  Avolution.bputs "hello... bold text"
  Avolution.uputs "hello... underline"
  Avolution.aputs "I need attention"

  puts Avolution.string?("this is a string") # I assure you this is a string
  puts Avolution.string?(:notastring)        # I assure you this is not

  puts Avolution.number?(10)       # this is a number, in its natural habitat kiddos
  puts Avolution.number?("zebras") # one, two, three, zebra! wait no...

  puts Avolution.symbol?(:notastring) # I agree
  puts Avolution.symbol?("zebra")     # zebra's a number

  puts Avolution.xor?(true, false)
  puts Avolution.xor?(false, false)
  puts Avolution.xor?(true, true)
end
