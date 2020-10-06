#ifndef ELEMENT_H
#define ELEMENT_H

class Element
{
private:
    int a;
public:
    Element(int e=0);
    Element(const Element &e);
    Element(Element &&e);
};

#endif // ELEMENT_H
