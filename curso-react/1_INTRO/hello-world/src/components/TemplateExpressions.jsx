import React from 'react'

export const TemplateExpressions = () => {

    const name = "Carlos Eduardo "
    const subName = " Silva"

    const job = {
        desc: "Programmer",
        time: "2 years"
    }

  return (
    <h2>

        Hi, {name + "da" + subName}, currently you work as {job.desc} a {job.time};

    </h2>
  )
}
