import definePlugin from "@utils/types";

export default definePlugin({
    name: "Auto Dark Mode",
    description: "Auto-set a dark mode",
    authors: [
        {
            id: 0n,
            name: "DevilBro",
        },
    ],
    patches: [],
    // Delete these two below if you are only using code patches
    start() {},
    stop() {},
});
