package example.schema

import org.apache.pekko.NotUsed
import org.apache.pekko.stream.scaladsl.*

final case class UserUpdateInput(username: String, sex: Int)

final case class UserQueryInput(id: String)

final case class UserOutput(id: String, username: String)

final case class UserQueryResolver(
  getUsers: UserQueryInput => UserOutput,
  batchGetUsers: List[UserQueryInput] => Source[UserOutput, NotUsed]
)
