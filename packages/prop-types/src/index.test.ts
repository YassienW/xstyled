import { space } from '@xstyled/system'
import { getSystemPropTypes } from '.'

describe('#getSystemPropTypes', () => {
  it('generates empty object if falsy', () => {
    const propTypes = getSystemPropTypes()
    expect(propTypes).toEqual({})
  })

  it('generates PropTypes from system', () => {
    const propTypes = getSystemPropTypes(space)
    expect(Object.keys(propTypes)).toMatchInlineSnapshot(`
      Array [
        "motionSafeMargin",
        "motionReduceMargin",
        "firstMargin",
        "lastMargin",
        "oddMargin",
        "evenMargin",
        "visitedMargin",
        "checkedMargin",
        "focusWithinMargin",
        "hoverMargin",
        "focusMargin",
        "focusVisibleMargin",
        "activeMargin",
        "disabledMargin",
        "placeholderMargin",
        "margin",
        "motionSafeM",
        "motionReduceM",
        "firstM",
        "lastM",
        "oddM",
        "evenM",
        "visitedM",
        "checkedM",
        "focusWithinM",
        "hoverM",
        "focusM",
        "focusVisibleM",
        "activeM",
        "disabledM",
        "placeholderM",
        "m",
        "motionSafeMarginTop",
        "motionReduceMarginTop",
        "firstMarginTop",
        "lastMarginTop",
        "oddMarginTop",
        "evenMarginTop",
        "visitedMarginTop",
        "checkedMarginTop",
        "focusWithinMarginTop",
        "hoverMarginTop",
        "focusMarginTop",
        "focusVisibleMarginTop",
        "activeMarginTop",
        "disabledMarginTop",
        "placeholderMarginTop",
        "marginTop",
        "motionSafeMt",
        "motionReduceMt",
        "firstMt",
        "lastMt",
        "oddMt",
        "evenMt",
        "visitedMt",
        "checkedMt",
        "focusWithinMt",
        "hoverMt",
        "focusMt",
        "focusVisibleMt",
        "activeMt",
        "disabledMt",
        "placeholderMt",
        "mt",
        "motionSafeMarginRight",
        "motionReduceMarginRight",
        "firstMarginRight",
        "lastMarginRight",
        "oddMarginRight",
        "evenMarginRight",
        "visitedMarginRight",
        "checkedMarginRight",
        "focusWithinMarginRight",
        "hoverMarginRight",
        "focusMarginRight",
        "focusVisibleMarginRight",
        "activeMarginRight",
        "disabledMarginRight",
        "placeholderMarginRight",
        "marginRight",
        "motionSafeMr",
        "motionReduceMr",
        "firstMr",
        "lastMr",
        "oddMr",
        "evenMr",
        "visitedMr",
        "checkedMr",
        "focusWithinMr",
        "hoverMr",
        "focusMr",
        "focusVisibleMr",
        "activeMr",
        "disabledMr",
        "placeholderMr",
        "mr",
        "motionSafeMarginBottom",
        "motionReduceMarginBottom",
        "firstMarginBottom",
        "lastMarginBottom",
        "oddMarginBottom",
        "evenMarginBottom",
        "visitedMarginBottom",
        "checkedMarginBottom",
        "focusWithinMarginBottom",
        "hoverMarginBottom",
        "focusMarginBottom",
        "focusVisibleMarginBottom",
        "activeMarginBottom",
        "disabledMarginBottom",
        "placeholderMarginBottom",
        "marginBottom",
        "motionSafeMb",
        "motionReduceMb",
        "firstMb",
        "lastMb",
        "oddMb",
        "evenMb",
        "visitedMb",
        "checkedMb",
        "focusWithinMb",
        "hoverMb",
        "focusMb",
        "focusVisibleMb",
        "activeMb",
        "disabledMb",
        "placeholderMb",
        "mb",
        "motionSafeMarginLeft",
        "motionReduceMarginLeft",
        "firstMarginLeft",
        "lastMarginLeft",
        "oddMarginLeft",
        "evenMarginLeft",
        "visitedMarginLeft",
        "checkedMarginLeft",
        "focusWithinMarginLeft",
        "hoverMarginLeft",
        "focusMarginLeft",
        "focusVisibleMarginLeft",
        "activeMarginLeft",
        "disabledMarginLeft",
        "placeholderMarginLeft",
        "marginLeft",
        "motionSafeMl",
        "motionReduceMl",
        "firstMl",
        "lastMl",
        "oddMl",
        "evenMl",
        "visitedMl",
        "checkedMl",
        "focusWithinMl",
        "hoverMl",
        "focusMl",
        "focusVisibleMl",
        "activeMl",
        "disabledMl",
        "placeholderMl",
        "ml",
        "motionSafeMx",
        "motionReduceMx",
        "firstMx",
        "lastMx",
        "oddMx",
        "evenMx",
        "visitedMx",
        "checkedMx",
        "focusWithinMx",
        "hoverMx",
        "focusMx",
        "focusVisibleMx",
        "activeMx",
        "disabledMx",
        "placeholderMx",
        "mx",
        "motionSafeMy",
        "motionReduceMy",
        "firstMy",
        "lastMy",
        "oddMy",
        "evenMy",
        "visitedMy",
        "checkedMy",
        "focusWithinMy",
        "hoverMy",
        "focusMy",
        "focusVisibleMy",
        "activeMy",
        "disabledMy",
        "placeholderMy",
        "my",
        "motionSafePadding",
        "motionReducePadding",
        "firstPadding",
        "lastPadding",
        "oddPadding",
        "evenPadding",
        "visitedPadding",
        "checkedPadding",
        "focusWithinPadding",
        "hoverPadding",
        "focusPadding",
        "focusVisiblePadding",
        "activePadding",
        "disabledPadding",
        "placeholderPadding",
        "padding",
        "motionSafeP",
        "motionReduceP",
        "firstP",
        "lastP",
        "oddP",
        "evenP",
        "visitedP",
        "checkedP",
        "focusWithinP",
        "hoverP",
        "focusP",
        "focusVisibleP",
        "activeP",
        "disabledP",
        "placeholderP",
        "p",
        "motionSafePaddingTop",
        "motionReducePaddingTop",
        "firstPaddingTop",
        "lastPaddingTop",
        "oddPaddingTop",
        "evenPaddingTop",
        "visitedPaddingTop",
        "checkedPaddingTop",
        "focusWithinPaddingTop",
        "hoverPaddingTop",
        "focusPaddingTop",
        "focusVisiblePaddingTop",
        "activePaddingTop",
        "disabledPaddingTop",
        "placeholderPaddingTop",
        "paddingTop",
        "motionSafePt",
        "motionReducePt",
        "firstPt",
        "lastPt",
        "oddPt",
        "evenPt",
        "visitedPt",
        "checkedPt",
        "focusWithinPt",
        "hoverPt",
        "focusPt",
        "focusVisiblePt",
        "activePt",
        "disabledPt",
        "placeholderPt",
        "pt",
        "motionSafePaddingRight",
        "motionReducePaddingRight",
        "firstPaddingRight",
        "lastPaddingRight",
        "oddPaddingRight",
        "evenPaddingRight",
        "visitedPaddingRight",
        "checkedPaddingRight",
        "focusWithinPaddingRight",
        "hoverPaddingRight",
        "focusPaddingRight",
        "focusVisiblePaddingRight",
        "activePaddingRight",
        "disabledPaddingRight",
        "placeholderPaddingRight",
        "paddingRight",
        "motionSafePr",
        "motionReducePr",
        "firstPr",
        "lastPr",
        "oddPr",
        "evenPr",
        "visitedPr",
        "checkedPr",
        "focusWithinPr",
        "hoverPr",
        "focusPr",
        "focusVisiblePr",
        "activePr",
        "disabledPr",
        "placeholderPr",
        "pr",
        "motionSafePaddingBottom",
        "motionReducePaddingBottom",
        "firstPaddingBottom",
        "lastPaddingBottom",
        "oddPaddingBottom",
        "evenPaddingBottom",
        "visitedPaddingBottom",
        "checkedPaddingBottom",
        "focusWithinPaddingBottom",
        "hoverPaddingBottom",
        "focusPaddingBottom",
        "focusVisiblePaddingBottom",
        "activePaddingBottom",
        "disabledPaddingBottom",
        "placeholderPaddingBottom",
        "paddingBottom",
        "motionSafePb",
        "motionReducePb",
        "firstPb",
        "lastPb",
        "oddPb",
        "evenPb",
        "visitedPb",
        "checkedPb",
        "focusWithinPb",
        "hoverPb",
        "focusPb",
        "focusVisiblePb",
        "activePb",
        "disabledPb",
        "placeholderPb",
        "pb",
        "motionSafePaddingLeft",
        "motionReducePaddingLeft",
        "firstPaddingLeft",
        "lastPaddingLeft",
        "oddPaddingLeft",
        "evenPaddingLeft",
        "visitedPaddingLeft",
        "checkedPaddingLeft",
        "focusWithinPaddingLeft",
        "hoverPaddingLeft",
        "focusPaddingLeft",
        "focusVisiblePaddingLeft",
        "activePaddingLeft",
        "disabledPaddingLeft",
        "placeholderPaddingLeft",
        "paddingLeft",
        "motionSafePl",
        "motionReducePl",
        "firstPl",
        "lastPl",
        "oddPl",
        "evenPl",
        "visitedPl",
        "checkedPl",
        "focusWithinPl",
        "hoverPl",
        "focusPl",
        "focusVisiblePl",
        "activePl",
        "disabledPl",
        "placeholderPl",
        "pl",
        "motionSafePx",
        "motionReducePx",
        "firstPx",
        "lastPx",
        "oddPx",
        "evenPx",
        "visitedPx",
        "checkedPx",
        "focusWithinPx",
        "hoverPx",
        "focusPx",
        "focusVisiblePx",
        "activePx",
        "disabledPx",
        "placeholderPx",
        "px",
        "motionSafePy",
        "motionReducePy",
        "firstPy",
        "lastPy",
        "oddPy",
        "evenPy",
        "visitedPy",
        "checkedPy",
        "focusWithinPy",
        "hoverPy",
        "focusPy",
        "focusVisiblePy",
        "activePy",
        "disabledPy",
        "placeholderPy",
        "py",
        "motionSafeSpaceX",
        "motionReduceSpaceX",
        "firstSpaceX",
        "lastSpaceX",
        "oddSpaceX",
        "evenSpaceX",
        "visitedSpaceX",
        "checkedSpaceX",
        "focusWithinSpaceX",
        "hoverSpaceX",
        "focusSpaceX",
        "focusVisibleSpaceX",
        "activeSpaceX",
        "disabledSpaceX",
        "placeholderSpaceX",
        "spaceX",
        "motionSafeSpaceY",
        "motionReduceSpaceY",
        "firstSpaceY",
        "lastSpaceY",
        "oddSpaceY",
        "evenSpaceY",
        "visitedSpaceY",
        "checkedSpaceY",
        "focusWithinSpaceY",
        "hoverSpaceY",
        "focusSpaceY",
        "focusVisibleSpaceY",
        "activeSpaceY",
        "disabledSpaceY",
        "placeholderSpaceY",
        "spaceY",
        "motionSafeSpaceXReverse",
        "motionReduceSpaceXReverse",
        "firstSpaceXReverse",
        "lastSpaceXReverse",
        "oddSpaceXReverse",
        "evenSpaceXReverse",
        "visitedSpaceXReverse",
        "checkedSpaceXReverse",
        "focusWithinSpaceXReverse",
        "hoverSpaceXReverse",
        "focusSpaceXReverse",
        "focusVisibleSpaceXReverse",
        "activeSpaceXReverse",
        "disabledSpaceXReverse",
        "placeholderSpaceXReverse",
        "spaceXReverse",
        "motionSafeSpaceYReverse",
        "motionReduceSpaceYReverse",
        "firstSpaceYReverse",
        "lastSpaceYReverse",
        "oddSpaceYReverse",
        "evenSpaceYReverse",
        "visitedSpaceYReverse",
        "checkedSpaceYReverse",
        "focusWithinSpaceYReverse",
        "hoverSpaceYReverse",
        "focusSpaceYReverse",
        "focusVisibleSpaceYReverse",
        "activeSpaceYReverse",
        "disabledSpaceYReverse",
        "placeholderSpaceYReverse",
        "spaceYReverse",
      ]
    `)
  })
})