package gw.specContrib.classes.property_Declarations.javaClassGosuEnh;

public class Errant_JavaClass_31 {
    String getBigBigProperty() { return null; }
    void setBigBigProperty(String s){}

    String getBigSmallProperty() { return null; }
    void setBigSmallProperty(String s){}

    String getsmallSmallProperty(){ return null; }
    void setsmallSmallProperty(String s){}

    //Should not show error as the function generated by property will be getSmallCaseProperty3() with Capital 'S'
    String getsmallBigProperty() { return null; }
    void setsmallBigProperty(String s){}

    String getOnlyGetter1() { return null; }

    void setOnlySetter1(String s) { }
}