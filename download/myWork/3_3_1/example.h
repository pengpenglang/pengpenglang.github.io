#ifndef EXAMPLE_H
#define EXAMPLE_H

class Example
{
private:
    int i;
public:
    Example(int n);
    ~Example();
    int get_i();
};

int sqrt_it(Example o);

#endif // EXAMPLE_H
