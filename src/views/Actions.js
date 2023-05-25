import eyeBlueIcon from "../assets/svg/eye_blue.js"
// import downloadBlueIcon from "../assets/svg/download_blue.js"

export default (billUrl) => {
  const divData = billUrl.substr(-5) !== '/null' ?
      `<div id="eye" data-testid="icon-eye" data-bill-url=${billUrl}>`
    :
      '<div id="eye-grey" data-testid="icon-eye-grey">'
  return (
    `<div class="icon-actions">
      ${divData}
      ${eyeBlueIcon}
      </div>
    </div>`
  )
}