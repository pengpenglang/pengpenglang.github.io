#ifndef TEST_H
#define TEST_H

class Test
{
public:
    Test();
    Test(int xx);
    Test(const Test &t);
private:
    int x;
};

#endif // TEST_H
