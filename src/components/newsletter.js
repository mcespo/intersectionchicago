import React from "react"

export default function Newsletter() {
  return (
    <section>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <article class="article" id="mc_embed_signup">
        <h2>Subscribe to our mailing list</h2>
        <form
          action="//humanlibrarychicago.us8.list-manage.com/subscribe/post?u=a69928549db042fb4b22a6cdd&amp;id=0dcca60333"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
              <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL">
            </div>
            <div className="mc-field-group">
              <label for="mce-FNAME">First Name  <span className="asterisk">*</span></label>
              <input type="text" value="" name="FNAME" className="required" id="mce-FNAME">
            </div>
          <div className="mc-field-group">
          	<label for="mce-LNAME">Last Name </label>
          	<input type="text" value="" name="LNAME" className="" id="mce-LNAME">
          </div>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
        	<div id="mce-responses" className="clear">
        		<div className="response" id="mce-error-response" style="display:none"></div>
        		<div className="response" id="mce-success-response" style="display:none"></div>
        	</div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a69928549db042fb4b22a6cdd_0dcca60333" tabindex="-1" value=""></div>
          <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
        </form>
      </article>
    </section>
  )
}
