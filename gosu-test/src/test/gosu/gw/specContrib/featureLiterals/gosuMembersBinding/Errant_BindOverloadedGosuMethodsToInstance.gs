package gw.specContrib.featureLiterals.gosuMembersBinding

class Errant_BindOverloadedGosuMethodsToInstance {
  var jake : GosuFL

  var overloadedFun111 = jake#overloadedFun()      //## issuekeys: AMBIGUOUS METHOD CALL: BOTH 'GOSUFL.OVERLOADEDFUN(INT)' AND 'GOSUFL.OVERLOADEDFUN(STRING)' MATCH
  var overloadedFun112 = jake#overloadedFun(String)
  var overloadedFun113 = jake#overloadedFun(int)
  var overloadedFun114 = jake#overloadedFun("mystring")
  var overloadedFun115 = jake#overloadedFun(42)
  var overloadedFun116 = jake#overloadedFun(String, int)
  var overloadedFun117 = jake#overloadedFun("mystring", 42)
  var overloadedFun118 = jake#overloadedFun(String, 42)      //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, INT)'
  var overloadedFun119 = jake#overloadedFun("mystring", int)      //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, GW.LANG.__PSI__.METATYPE<INT>)'
  var overloadedFun120 = jake#overloadedFun(GosuFL)      //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
  var overloadedFun121 = jake#overloadedFun(GosuFL, String)      //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
  var overloadedFun122 = jake#overloadedFun(GosuFL, int)      //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'
  var overloadedFun123 = jake#overloadedFun(GosuFL, String, int)      //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'
  var overloadedFun124 = jake#overloadedFun(GosuFL, "mystring")      //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL>, JAVA.LANG.STRING)'
  var overloadedFun125 = jake#overloadedFun(GosuFL, 42)      //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL>, INT)'
  var overloadedFun126 = jake#overloadedFun(GosuFL, "mystring", 42)      //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL>, JAVA.LANG.STRING, INT)'
  var overloadedFun127 = jake#overloadedFun      //## issuekeys: CANNOT RESOLVE SYMBOL 'OVERLOADEDFUN'

  function invokeOverloadedGosuFuns() {
    var gInstance : GosuFL

    //overloadedFun111
    //This method FL is not visible in Parser as the definition has an error. But OS Gosu can see this. So commenting
    //overloadedFun111.invoke()

    //overloadedFun112
    overloadedFun112.invoke()      //## issuekeys: 'INVOKE(JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun112.invoke("mystring")
    overloadedFun112.invoke(gInstance)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun112.invoke(gInstance, "mystring")      //## issuekeys: 'INVOKE(JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun112.invoke(gInstance, String)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>)'

    //overloadedFun113
    overloadedFun113.invoke()      //## issuekeys: 'INVOKE(INT)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun113.invoke(42)
    overloadedFun113.invoke(gInstance)      //## issuekeys: 'INVOKE(INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun113.invoke(gInstance, 42)      //## issuekeys: 'INVOKE(INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'
    overloadedFun113.invoke(gInstance, int)      //## issuekeys: 'INVOKE(INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<INT>)'


    //overloadedFun114
    overloadedFun114.invoke()
    overloadedFun114.invoke("mystring")      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    overloadedFun114.invoke(String)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>)'
    overloadedFun114.invoke(gInstance)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun114.invoke(gInstance, "mystring")      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun114.invoke(gInstance, String)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>)'

    //overloadedFun115
    overloadedFun115.invoke()
    overloadedFun115.invoke(42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(INT)'
    overloadedFun115.invoke(int)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<INT>)'
    overloadedFun115.invoke(gInstance)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun115.invoke(gInstance, 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'
    overloadedFun115.invoke(gInstance, int)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<INT>)'


    //overloadedFun116
    overloadedFun116.invoke()      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun116.invoke("mystring", 42)
    overloadedFun116.invoke(String, int)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, GW.LANG.__PSI__.METATYPE<INT>)'
    overloadedFun116.invoke(gInstance)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun116.invoke(gInstance, "mystring", 42)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'
    overloadedFun116.invoke(gInstance, String, int)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, GW.LANG.__PSI__.METATYPE<INT>)'
    overloadedFun116.invoke(gInstance, "mystring")      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun116.invoke(gInstance, 42)      //## issuekeys: 'INVOKE(JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'


    //overloadedFun117
    overloadedFun117.invoke()
    overloadedFun117.invoke(gInstance)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun117.invoke("mystring", 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'
    overloadedFun117.invoke(gInstance, "mystring", 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'
    overloadedFun117.invoke(gInstance, String, int)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, GW.LANG.__PSI__.METATYPE<INT>)'
    overloadedFun117.invoke(gInstance, "mystring")      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun117.invoke(gInstance, 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'


    //overloadedFun118
    overloadedFun118.invoke("mystring")      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    overloadedFun118.invoke("mystring", 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'
    overloadedFun118.invoke(gInstance, "mystring")      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'

    //overloadedFun119
    overloadedFun119.invoke(42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(INT)'
    overloadedFun119.invoke("mystring", 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'
    overloadedFun119.invoke(gInstance, 42)      //## issuekeys: 'INVOKE()' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'

    //overloadedFun120
    overloadedFun120.invoke(gInstance, "mystring", 42)      //## issuekeys: CANNOT RESOLVE METHOD 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'

    //overloadedFun121
    //Same as overloadedFun111
    //overloadedFun121.invoke(gInstance, "mystring")

    //overloadedFun122
    //Same as overloadedFun111
    // overloadedFun122.invoke(gInstance, 42)

    //overloadedFun123
    //Same as overloadedFun111
    //overloadedFun123.invoke(gInstance, "mystring", 42)

    //overloadedFun124
    //Same as overloadedFun111
    //overloadedFun124.invoke()
    //overloadedFun124.invoke(gInstance)
    //overloadedFun124.invoke(gInstance, "mystring")

    //overloadedFun125
    //Same as overloadedFun111
    // overloadedFun125.invoke()
    //overloadedFun125.invoke(gInstance)
    //overloadedFun125.invoke(gInstance, 42)

    //overloadedFun126
    //Same as overloadedFun111
    //overloadedFun126.invoke()
    //overloadedFun126.invoke(gInstance)

    //overloadedFun127
    overloadedFun127.invoke()      //## issuekeys: CANNOT RESOLVE METHOD 'INVOKE()'
  }

  class OverloadMethodsInstance1 {
    function hello(s: String , i: int): String { return null }
    function hello(s: String , i: double): String { return null }

    var gInstance : OverloadMethodsInstance1

    var f111 = gInstance#hello(String, int)
    var f112 = gInstance#hello(String, double)
    var f113 = gInstance#hello("mystring", 10)
    var f114 = gInstance#hello("mystring", 42.5)
  }

}