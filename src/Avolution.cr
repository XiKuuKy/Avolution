# Avolution is an ideal subset expanding the library of what is easily done in Crystal and giving it new but familiar features.
require "emoji"
require "colorize"

module Avolution
  VERSION = "0.1.0"
  extend self

  # finds :emoji: and emojicizes it before puts-ing it.
  def eputs(s : String)
    puts Emoji.emojize(s)
  end

  # passes arguments 1 then 2 then 3 to a block
  #
  # ```
  # Avolution.ilisam do |i|
  #   puts i
  # end
  # ```
  #
  # returns
  #
  # ```
  # 1
  # 2
  # 3
  # ```
  def ilisam
    yield 1
    yield 2
    yield 3
  end

  # execute function twice
  macro twice(function)
    {{function}}
    {{function}}
  end

  def bputs(s : String)
    puts s.colorize.mode(:bold)
  end
end
