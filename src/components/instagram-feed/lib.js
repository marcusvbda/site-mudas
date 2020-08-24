const _ = require('lodash')
class Instagram {
    static getFeed(username, chunk) {
        const mapMedia = (json) => {
            const thumbnailIndex = (node) => {
                node.thumbnail_resources.forEach((item, index) => {
                    if (item.config_width === 640) {
                        return index
                    }
                })

                return 4 // MAGIC
            }

            const url = (node) => {
                return "https://www.instagram.com/p/" + node.shortcode
            }

            const edges =
                json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media
                    .edges

            return edges.map((edge) => {
                return {
                    shortCode: edge.node.shortcode,
                }
            })
        }

        const getJSON = (body) => {
            try {
                const data = body
                    .split("window._sharedData = ")[1]
                    .split("</script>")[0]
                return JSON.parse(data.substr(0, data.length - 1))
            } catch (err) {
                throw Error("Cannot parse response body")
            }
        }

        const url = "https://www.instagram.com/" + username + "/"

        return fetch(url)
            .then((resp) => resp.text())
            .then((body) => getJSON(body))
            .then((json) => {
                if (chunk) return _.chunk(mapMedia(json), chunk)
                return mapMedia(json)
            })
    }
}

export default Instagram