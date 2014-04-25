require "spec_helper"

describe("visiting the root") do 
	describe "clicking hey macarena", js: true do
		it "changes text" do
			visit (root_path)
			page.find("h1", :text => "Hey Macarena").click
		end
	end
end