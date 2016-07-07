require 'spec_helper'

feature "Log in to Dashboard" do
  scenario "filling out the log in form correctly displays the dashboard" do
    visit '/'

    # locate elements via:
    # tag, role, value, aria-describedby, aria-labelledby

    # scope via:
    # role, fieldset + legend, form

    # use aria role attributes and *semantic* tags to verify text content
    expect(find("[role='banner'] h1")).to have_content 'Example'
    expect(find("[role='contentinfo']")).to have_content '© 2016'

    within "[role='navigation']" do
      expect(page).to have_selector('a', count: 2)

      expect(find("li:nth-of-type(1) a")).to have_content 'Instructure'
      expect(find("li:nth-of-type(2) a")).to have_content 'Github'

      # requires jquery sizzle selectors:
      # expect(find("a:contains('Instructure')")).to exist
      # expect(find("a:contains('Github')")).to exist
    end

    # scope form fields to a specific form using *semantic* tag + aria-label
    within "form[aria-label='Log In']" do

      # use label text to locate form fields
      fill_in 'Email', :with => 'user@example.com'
      fill_in 'Password', :with => 'password'

      # select inputs by type
      expect(find("input[type='email']").value).to eq 'user@example.com'

      # and another way:

      # use tag + text label to locate buttons
      click_button 'Log In'
    end

    # locate content within a particular location using aria role attributes
    within "[role='main']" do
      expect(page).to have_content 'Welcome user@example.com'

      # the structure of table markup should be pretty stable so we can write selectors like:
      # requires jquery sizzle selectors:
      # expect(find("caption:contains('User data') ~ tbody > tr:nth-child(1) > td:nth-child(2)")).to have_content 'Somebody'
    end
  end
end

