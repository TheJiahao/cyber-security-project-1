/** @type {import("prettier").Config} */

export default {
    tabWidth: 4,
    plugins: ["prettier-plugin-organize-imports"],
    overrides: [
        {
            files: "*.yml",
            options: {
                tabWidth: 2,
            },
        },
    ],
};
