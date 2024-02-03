package symphony.derivation

import org.scalatest.funspec.AnyFunSpec
import org.scalatest.matchers.should.Matchers
import symphony.*
import symphony.schema.*
import symphony.derivation.SchemaGen
import symphony.derivation.SchemaGen.given
import symphony.derivation.SchemaGen.*

import symphony.derivation.ArgumentExtractorGen.given

class AutoSchemaSpec extends AnyFunSpec with Matchers {

  case class UserTest(name: String, age: Int)
  case class UserComplex(id: Int, user: UserTest)
  case class UserParams(nameLike: String, active: Boolean)

  case class QueryTest(allUsers: Int => List[UserTest])
  case class MutationTest(
    id: UserComplex => Boolean,
    fetch: UserParams => Boolean
  )

  val graphql =
    SymphonyQL
      .builder()
      .rootResolver(
        SymphonyQLResolver(
          QueryTest((a) => List())                -> SchemaGen.derived[QueryTest],
          MutationTest(c => true, params => true) -> SchemaGen.derived[MutationTest]
        )
      )
      .build()

  describe("Schema and Render") {
    it("render doc") {
      val document = graphql.render.trim
      println(document)
      document shouldEqual """schema {
                             |  query: QueryTest
                             |  mutation: MutationTest
                             |}
                             |
                             |input UserTestInput {
                             |  name: String!
                             |  age: Int!
                             |}
                             |
                             |type MutationTest {
                             |  id(id: Int!, user: UserTestInput!): Boolean!
                             |  fetch(nameLike: String!, active: Boolean!): Boolean!
                             |}
                             |
                             |type QueryTest {
                             |  allUsers(value: Int!): [UserTest!]!
                             |}
                             |
                             |type UserTest {
                             |  name: String!
                             |  age: Int!
                             |}""".stripMargin
    }
  }

}
