#ifndef MOUSE_H
#define MOUSE_H

#include<string>
using namespace std;

class Mouse{
public:
    Mouse(string newName);
    ~Mouse();
    string getName();
    static int mouseNum;

private:
    string name;
};

#endif // MOUSE_H
