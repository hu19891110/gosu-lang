package gw.specContrib.featureLiterals.gosuMembersBinding

class Errant_BindOverloadedGosuMethods {


  var overloadedFun111 = GosuFL#overloadedFun()            //## issuekeys: AMBIGUOUS METHOD CALL: BOTH 'GOSUFL.OVERLOADEDFUN(INT)' AND 'GOSUFL.OVERLOADEDFUN(STRING)' MATCH
  var overloadedFun112 = GosuFL#overloadedFun(String)
  var overloadedFun113 = GosuFL#overloadedFun(int)
  var overloadedFun114 = GosuFL#overloadedFun("mystring")
  var overloadedFun115 = GosuFL#overloadedFun(42)
  var overloadedFun116 = GosuFL#overloadedFun(String, int)
  var overloadedFun117 = GosuFL#overloadedFun("mystring", 42)
  var overloadedFun118 = GosuFL#overloadedFun(String, 42)            //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, INT)'
  var overloadedFun119 = GosuFL#overloadedFun("mystring", int)            //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, GW.LANG.__PSI__.METATYPE<INT>)'
  var overloadedFun120 = GosuFL#overloadedFun(GosuFL)            //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
  var overloadedFun121 = GosuFL#overloadedFun(GosuFL, String)            //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
  var overloadedFun122 = GosuFL#overloadedFun(GosuFL, int)            //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'
  var overloadedFun123 = GosuFL#overloadedFun(GosuFL, String, int)            //## issuekeys: CANNOT RESOLVE METHOD 'OVERLOADEDFUN(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'
  var overloadedFun124 = GosuFL#overloadedFun(GosuFL, "mystring")            //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL>, JAVA.LANG.STRING)'
  var overloadedFun125 = GosuFL#overloadedFun(GosuFL, 42)            //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL>, INT)'
  var overloadedFun126 = GosuFL#overloadedFun(GosuFL, "mystring", 42)            //## issuekeys: 'OVERLOADEDFUN(JAVA.LANG.STRING, INT)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL' CANNOT BE APPLIED TO '(GW.LANG.__PSI__.METATYPE<GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL>, JAVA.LANG.STRING, INT)'
  var overloadedFun127 = GosuFL#overloadedFun            //## issuekeys: CANNOT RESOLVE SYMBOL 'OVERLOADEDFUN'

  function invokeOverloadedGosuFuns() {
    var gInstance : GosuFL

    //overloadedFun111
    //This method FL is not visible in Parser as the definition has an error. But OS Gosu can see this. So commenting
    //overloadedFun111.invoke()

    //overloadedFun112
    overloadedFun112.invoke()            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun112.invoke("mystring")            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    overloadedFun112.invoke(gInstance)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun112.invoke(gInstance, "mystring")
    overloadedFun112.invoke(gInstance, String)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>)'

    //overloadedFun113
    overloadedFun113.invoke()            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun113.invoke(42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)' IN '' CANNOT BE APPLIED TO '(INT)'
    overloadedFun113.invoke(gInstance)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun113.invoke(gInstance, 42)
    overloadedFun113.invoke(gInstance, int)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<INT>)'


    //overloadedFun114
    overloadedFun114.invoke()            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun114.invoke(gInstance)
    overloadedFun114.invoke(gInstance, "mystring")            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun114.invoke(gInstance, String)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>)'

    //overloadedFun115
    overloadedFun115.invoke()            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun115.invoke(gInstance)
    overloadedFun115.invoke(gInstance, 42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'
    overloadedFun115.invoke(gInstance, int)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<INT>)'


    //overloadedFun116
    overloadedFun116.invoke()            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun116.invoke("mystring", 42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'
    overloadedFun116.invoke(gInstance)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)'
    overloadedFun116.invoke(gInstance, "mystring", 42)
    overloadedFun116.invoke(gInstance, String, int)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, GW.LANG.__PSI__.METATYPE<INT>)'
    overloadedFun116.invoke(gInstance, "mystring")            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun116.invoke(gInstance, 42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'


    //overloadedFun117
    overloadedFun117.invoke()            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '()'
    overloadedFun117.invoke(gInstance)
    overloadedFun117.invoke(gInstance, "mystring", 42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'
    overloadedFun117.invoke(gInstance, String, int)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, GW.LANG.__PSI__.METATYPE<JAVA.LANG.STRING>, GW.LANG.__PSI__.METATYPE<INT>)'
    overloadedFun117.invoke(gInstance, "mystring")            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'
    overloadedFun117.invoke(gInstance, 42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'


    //overloadedFun118
    overloadedFun118.invoke(gInstance, "mystring")            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING)'

    //overloadedFun119
    overloadedFun119.invoke(gInstance, 42)            //## issuekeys: 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL)' IN '' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, INT)'

    //overloadedFun120
    overloadedFun120.invoke(gInstance, "mystring", 42)            //## issuekeys: CANNOT RESOLVE METHOD 'INVOKE(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.GOSUFEATURELITERALS.GOSUFL, JAVA.LANG.STRING, INT)'

    //overloadedFun121
    //Same as overloadedFun111
    //overloadedFun121.invoke(gInstance, "mystring")

    //overloadedFun122
    //Same as overloadedFun111
    //overloadedFun122.invoke(gInstance, 42)

    //overloadedFun123
    //Same as overloadedFun111
    //overloadedFun123.invoke(gInstance, "mystring", 42)

    //overloadedFun124
    //Same as overloadedFun111
    //overloadedFun124.invoke(gInstance)
    //overloadedFun124.invoke(gInstance, "mystring")

    //overloadedFun125
    //Same as overloadedFun111
    //overloadedFun125.invoke(gInstance)
    //overloadedFun125.invoke(gInstance, 42)

    //overloadedFun126
    //Same as overloadedFun111
    //overloadedFun126.invoke(gInstance)

    //overloadedFun127
    overloadedFun127.invoke()            //## issuekeys: CANNOT RESOLVE METHOD 'INVOKE()'
  }

  class OverloadMethods1 {
    function hello(s: String , i: int): String { return null }
    function hello(s: String , i: double): String { return null }

    var f111 = OverloadMethods1#hello(String, int)
    var f112 = OverloadMethods1#hello(String, double)
    var f113 = OverloadMethods1#hello("mystring", 10)
    var f114 = OverloadMethods1#hello("mystring", 42.5)
  }

}