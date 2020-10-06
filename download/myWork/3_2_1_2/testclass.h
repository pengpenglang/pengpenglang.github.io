#ifndef TESTCLASS_H
#define TESTCLASS_H

class TestClass
{
public:
    TestClass(int newValue=0);
    TestClass(const TestClass &rhs);
    ~TestClass();
    void setValue(int newValue);
    int getValue()const;

private:
    int value;
};

TestClass fooFun(TestClass t);
#endif // TESTCLASS_H
