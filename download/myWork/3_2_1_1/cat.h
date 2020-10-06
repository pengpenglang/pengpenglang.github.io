#ifndef CAT_H
#define CAT_H

#include<string>
using namespace std;//<string>头文件是std命名空间内的必须使用using指定
#include "mouse.h"//函数用到了mouse的对象需要调用mouse头文件

class Cat{
public:
    Cat(const string &newName):name(newName){
        cout<<name<<" is coming!\n";
    }
    void catchMouse(Mouse *pMouse);

private:
    string name;
};

#endif // CAT_H
