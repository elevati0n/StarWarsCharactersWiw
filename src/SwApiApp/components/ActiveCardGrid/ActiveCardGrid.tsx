import * as React from "react"
import { useEffect, useState } from "react"

import "./bb8.css"
import "./index.css"
const Bb8Button = ({onChange})=> {
  return (
    <div className={"bb8-button"}>
      <input type="checkbox" id="bb8_cb" onChange={onChange} />
      <label htmlFor="bb8_cb">
        <div id="bb8">
          <div id="bb8_head">
            <div id="half_circle">
              <div id="or0"></div>
              <div id="lens1"></div>
              <div id="lens2"></div>
              <div id="or1"></div>
            </div>
            <div id="dg1"></div>
            <div id="lg1"></div>
          </div>
          <div id="bb8_body">
            <div id="lg2"></div>
            <div id="c1">
              <div className="s1"></div>
              <div className="s2"></div>
            </div>
            <div id="c2">
              <div className="s1"></div>
              <div className="s2"></div>
            </div>
            <div id="c3">
              <div className="s1"></div>
              <div className="s2"></div>
            </div>
          </div>
        </div>
      </label>
      <section></section>
    </div>
  )
}
export const ActiveCardGrid = () => {
  // bb8 is in the background and behind that is the crawl and black background
  const [disableAnimations, setDisableAnimations] = useState(true)

  const onChange = () => setDisableAnimations(currentValue => !currentValue)
  return (
    <>
      <Bb8Button onChange={onChange}/>
      {!disableAnimations ? <div className="bb8">
        <div className="head"></div>
        <div className="body"></div>
      </div> : null}
    </>
  )
}
