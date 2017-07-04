/**
 * Starts gemini test by one function and one array of data
 *
 * @module gemifunc
 * @author Maksim Lukianchikov <feltmax@gmail.com> (lmfelt.me)
 * @license MIT
 */

/**
 * Exports
 * @public
 */

module.exports = (data) => {
    data.forEach((currentSuite, index) => {
        gemini.suite(currentSuite.name, (suite) => {
            let s = suite.setUrl(currentSuite.url)
                        .setCaptureElements(currentSuite.capturedElements);
            
            currentSuite.states.forEach((state, index) => {
                s.capture(state.name, state.callback);
            });
        });
    });
}