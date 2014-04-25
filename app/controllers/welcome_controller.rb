class WelcomeController < ApplicationController

	def index
	end

	def reverse
		word = params[:h1Text]
		render json: {h1Text: word.reverse.upcase!}
	end

end