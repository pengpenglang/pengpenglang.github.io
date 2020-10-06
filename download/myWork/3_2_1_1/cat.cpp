#include<bits/stdc++.h>
#include "cat.h"
#include "mouse.h"
using namespace std;

void Cat::catchMouse(Mouse *pMouse){
    cout<<"I catch you!I never want to see you again."
        <<pMouse->getName()<<'!'<<endl;
    delete pMouse;
}
