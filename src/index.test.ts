import { document as _ } from "./index"

describe("document", () => {
  beforeEach(() => {
    document.body.innerHTML = ""
  })

  afterEach(() => {
    document.body.innerHTML = ""
  })

  describe(_.contains, () => {
    const parent = document.createElement("ul")
    const child = document.createElement("li")

    document.body.appendChild(parent)
    parent.appendChild(child)

    test("that test structure is correct", () => {
      expect(document.body.innerHTML).toMatchInlineSnapshot(`"<ul><li></li></ul>"`)
    })

    it('returns true because "child" is a child of "parent"', () => {
      expect(_.contains(child)(parent)()).toBe(true)
    })

    it('returns false because "parent" is not a child of "child"', () => {
      expect(_.contains(parent)(child)()).toBe(false)
    })
  })
})
