#ifndef TEST_H
#define TEST_H

class Test
{
private:
    int a;
public:
    Test();
    Test(int x);
    Test(const Test &t);
    Test(Test &&t);
};

Test fun();
#endif // TEST_H
