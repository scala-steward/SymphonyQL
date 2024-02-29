import sbt.*

object Dependencies {

  object Versions {
    val scala3_Version          = "3.3.1"
    val `pekko-core_Version`    = "1.0.2"
    val `pekko-http_Version`    = "1.0.0"
    val `parboiled_Version`     = "2.5.1"
    val `scalatest_Version`     = "3.2.17"
    val `magnolia_Version`      = "1.3.4"
    val `javapoet_Version`      = "1.11.1"
    val `commons-lang3_Version` = "3.7"
  }

  object Deps {
    import Versions.*

    // parser schema and query, convert to ADTs, types definition
    val parser = sbt.Def.setting {
      Seq(
        "org.apache.pekko" %% "pekko-stream" % `pekko-core_Version` % Provided, // StreamValue
        "org.parboiled"    %% "parboiled"    % `parboiled_Version`  % Provided,
        "org.scalatest"    %% "scalatest"    % `scalatest_Version`  % Test
      )
    }

    // prepare, analyzer, run, tracing
    val core = sbt.Def.setting {
      Seq(
        "com.softwaremill.magnolia1_3" %% "magnolia"      % `magnolia_Version`,
        "org.apache.pekko"             %% "pekko-stream"  % `pekko-core_Version` % Provided,
        "org.apache.pekko"             %% "pekko-testkit" % `pekko-core_Version` % Test,
        "org.scalatest"                %% "scalatest"     % `scalatest_Version`  % Test
      )
    }

    // default http server
    val server = sbt.Def.setting {
      Seq(
        "org.apache.pekko" %% "pekko-http"   % `pekko-http_Version`,
        "org.apache.pekko" %% "pekko-stream" % `pekko-core_Version`
      )
    }

    val apt = sbt.Def.setting {
      Seq(
        "com.squareup"       % "javapoet"      % javapoet_Version,
        "org.apache.commons" % "commons-lang3" % `commons-lang3_Version`
      )
    }
  }

}