import {
    makeVideoExtractor,
    makeCloudstreamPlugin,
    CloudstreamPlugin
} from "../src/cloudstream"

export default makeCloudstreamPlugin({
    name: "FlixBaba",
    url: "https://flixbaba.is/",
    lang: "it",
    description: "Plugin per FlixBaba",
    type: "tv",
});
