package gw.specContrib.generics

abstract class BaseFoo {
  abstract function foo<B extends Gosh<B>>(): Gosh<B>
  abstract function bar<B extends Gosh<B>>(): Gosh<B>
}