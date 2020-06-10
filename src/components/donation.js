import React from "react"
import Button from "./button"

export default function Donation() {
  const submitForm = () => {
    document.querySelector("#pay_now_form_d49f5a8581").submit()
  }

  return (
    <section id="donate" className="donate">
      <hr />
      <p>
        Intersection is a recognized US{" "}
        <a
          href="https://apps.irs.gov/app/eos/displayPub78.do;jsessionid=uJBC4YDXFxKOgkhPBscd5Wf2.20?dispatchMethod=displayPub78Info&ein=611795176&country=US&deductibility=all&dispatchMethod=searchCharities&isDescending=false&city=Chicago&ein1=&postDateFrom=&exemptTypeCode=&submitName=Search&sortColumn=ein&totalResults=1&names=intersection&resultsPerPage=25&indexOfFirstRow=0&postDateTo=&state=IL"
          title="IRS Charitable Contributions site"
        >
          501c3 non-profit organization
        </a>
        . Our donations page is maintained by a PNC Bank. Please be aware that
        you will be redirected to an external site to ensure a secure
        transaction.
      </p>
      <div id="cp3a8ccc081b">
        <form
          action="https://globalgatewaye4.firstdata.com/pay"
          id="pay_now_form_d49f5a8581"
          method="post"
        >
          <input
            type="hidden"
            aria-hidden="true"
            name="x_login"
            value="WSP-INTER-96rdHQB&3A"
          />
          <input
            type="hidden"
            aria-hidden="true"
            name="x_show_form"
            value="PAYMENT_FORM"
          />
          <input
            type="hidden"
            aria-hidden="true"
            name="x_fp_sequence"
            value="14815748911997190821"
          />
          <input
            type="hidden"
            aria-hidden="true"
            name="x_fp_hash"
            value="PNB-1.0-eaf45fd608be819a5100ea23fa2e739e89494fb7"
          />
          <input aria-hidden="true" type="hidden" name="x_amount" value="" />
          <input
            aria-hidden="true"
            type="hidden"
            name="x_currency_code"
            value="USD"
          />
          <input
            aria-hidden="true"
            type="hidden"
            name="x_test_request"
            value="FALSE"
          />
          <input
            aria-hidden="true"
            type="hidden"
            name="x_relay_response"
            value=""
          />
          <input
            aria-hidden="true"
            type="hidden"
            name="donation_prompt"
            value=""
          />
          <input
            aria-hidden="true"
            type="hidden"
            name="button_code"
            value="Donate to Intersection"
          />
          <div className="cpwrap">
            <Button
              alternate
              text="Donate"
              type="button"
              clickEvent={submitForm}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
