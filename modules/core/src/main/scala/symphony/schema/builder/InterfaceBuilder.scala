package symphony.schema.builder

import symphony.parser.adt.Directive
import symphony.schema.*

import scala.annotation.varargs
import scala.jdk.OptionConverters.*

object InterfaceBuilder {
  def newObject[A](): InterfaceBuilder[A] = new InterfaceBuilder[A]
}

final class InterfaceBuilder[A] private {
  private var name: String                            = _
  private var description: Option[String]             = None
  private var subSchemas: List[(String, Schema[Any])] = List.empty
  private var directives: List[Directive]             = List.empty
  private var origin: Option[String]                  = None

  def name(name: String): this.type = {
    this.name = name
    this
  }

  def description(description: String): this.type = {
    this.description = Option(description)
    this
  }

  def subSchema[V](
    subName: String,
    subSchema: Schema[V]
  ): this.type = {
    this.subSchemas = subName -> subSchema.asInstanceOf[Schema[Any]] :: subSchemas
    this
  }

  @varargs
  def directives(directives: Directive*): this.type = {
    this.directives = directives.toList
    this
  }

  def origin(origin: String): this.type = {
    this.origin = Option(origin)
    this
  }

  def build(): Schema[A] =
    Schema.mkInterface(
      Option(name),
      description,
      subSchemas.reverse,
      origin,
      directives
    )

}
