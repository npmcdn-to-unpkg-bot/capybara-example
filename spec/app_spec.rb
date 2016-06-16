require 'spec_helper'

feature "Log in to Dashboard" do
  scenario "filling out the log in form correctly displays the dashboard" do
    visit '/'

    # locate elements via:
    # tag, role, value, aria-describedby, aria-labelledby

    # scope via:
    # role, fieldset + legend, form

    # use aria role attributes and tags to verify text content
    expect(find("[role='banner'] h1")).to have_content 'Example'
    expect(find("[role='contentinfo']")).to have_content '© 2016'

    within "[role='navigation']" do
      expect(page).to have_selector('a', count: 2)

      expect(find("a:nth-of-type(1)")).to have_content 'Instructure'
      expect(find("a:nth-of-type(2)")).to have_content 'Github'
    end

    # scope form fields to a specific form using tag + aria-label
    within "form[aria-label='Log In']" do

      # use label text to locate form fields
      fill_in 'Email', :with => 'user@example.com'
      fill_in 'Password', :with => 'password'

      # use tag + text label to locate buttons
      click_button 'Log In'
    end

    # locate content within a particular location using aria role attributes
    within "[role='main']" do
      expect(page).to have_content 'Welcome user@example.com'
    end

    # TODO: show locating an input via label + value
    # TODO: show locating an input within a fieldset (+ aria-describedby and legend)

  end
end

