import type MarkdownIt from "markdown-it"
import type StateCore from "markdown-it/lib/rules_core/state_core"

/**
 * A plugin that adds the the 'example' class to paragraphs
 */
export default function example_plugin(md: MarkdownIt): void {
  md.core.ruler.push("example", exampleRule)
}

function exampleRule(state: StateCore): boolean {
  for (const token of state.tokens) {
    if (token.type === "paragraph_open") {
      token.attrJoin("class", "example")
    }
  }
  return true
}
