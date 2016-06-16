require 'spec_helper'

feature "getting a timestamp" do
  scenario "clicking the button gets a timestamp" do
    visit '/'
    find('div.time-button').click
    expect(page).to have_selector('div.time-button.done')
  end
end
