const prettier = require("prettier");

module.exports = function(eleventyConfig) {
    // Копирование файлов
    eleventyConfig.addPassthroughCopy({ "src/img": "img" });
    eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });

    // Трансформация для форматирования HTML
    eleventyConfig.addTransform("prettier", function(content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            return prettier.format(content, {
                parser: "html",
                printWidth: 120,
                tabWidth: 4,
                useTabs: false
            });
        }
        return content;
    });

    return {
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "."
        }
    };
};