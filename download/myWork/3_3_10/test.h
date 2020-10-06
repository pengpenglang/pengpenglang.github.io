#ifndef TEST_H
#define TEST_H

class Test
{
private:
    int a,b;
public:
    Test();
    Test(int x);
    Test(int x,int y);
    void output() const;
};

#endif // TEST_H
