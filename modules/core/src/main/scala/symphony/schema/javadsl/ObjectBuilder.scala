package symphony
package schema
package javadsl

import symphony.parser.adt.Directive
import symphony.parser.adt.introspection.*

import scala.annotation.varargs
import scala.jdk.FunctionConverters.*
import scala.jdk.OptionConverters.*

object ObjectBuilder {
  def newObject[A](): ObjectBuilder[A] = new ObjectBuilder[A]
}

final class ObjectBuilder[A] private {
  private var name: String                                                                       = _
  private var description: Option[String]                                                        = None
  private var fieldWithArgs: List[(JavaFunction[FieldBuilder, __Field], JavaFunction[A, Stage])] = List.empty
  private var fields: List[(JavaFunction[FieldBuilder, __Field], JavaFunction[A, Stage])]        = List.empty
  private var directives: List[Directive]                                                        = List.empty
  private var isNullable: Boolean                                                                = false

  def name(name: String): this.type = {
    this.name = name
    this
  }

  def description(description: java.util.Optional[String]): this.type = {
    this.description = description.toScala
    this
  }

  def field(
    builder: JavaFunction[FieldBuilder, __Field]
  ): this.type = {
    this.fields = builder -> ((_: A) => Stage.createNull()) :: fields
    this
  }

  def fieldWithArg(
    builder: JavaFunction[FieldBuilder, __Field],
    stage: JavaFunction[A, Stage]
  ): this.type = {
    this.fieldWithArgs = builder -> stage :: fieldWithArgs
    this
  }

  @varargs
  def directives(directives: Directive*): this.type = {
    this.directives = directives.toList
    this
  }

  def isNullable(isNullable: Boolean): this.type = {
    this.isNullable = isNullable
    this
  }

  def build(): Schema[A] =
    if (isNullable)
      Schema.createNullable(
        Schema.mkObject(
          name,
          description,
          _ =>
            fieldWithArgs.reverse.map(kv => kv._1(FieldBuilder.newField().hasArgs(true)) -> kv._2.asScala) ++
              fields.reverse.map(kv => kv._1(FieldBuilder.newField().hasArgs(false)) -> kv._2.asScala),
          directives
        )
      )
    else
      Schema.mkObject(
        name,
        description,
        _ =>
          fieldWithArgs.reverse.map(kv => kv._1(FieldBuilder.newField().hasArgs(true)) -> kv._2.asScala) ++
            fields.reverse.map(kv => kv._1(FieldBuilder.newField().hasArgs(false)) -> kv._2.asScala),
        directives
      )

}
