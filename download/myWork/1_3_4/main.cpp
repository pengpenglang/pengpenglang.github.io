#include<bits/stdc++.h>
using namespace std;

int add(int a,int b){
    return a+b;
}

int sub(int a,int b){
    return a-b;
}

int multiply(int a,int b){
    return a*b;
}

int divide(int a,int b){
    return a/b;
}

char menu(){
    char choice;
    cout<<"1) add two number\n";
    cout<<"2) sub two number\n";
    cout<<"3) multiply two number\n";
    cout<<"4) divide two number\n";
    cout<<"0) quit\n";
    cout<<"Enter your choice:\n";
    cin>>choice;
    return choice;
}

bool answerQuestion(int num1,int num2,int (*f)(int,int),int answer){//check the calculate
    return f(num1,num2)==answer;
}

signed main(){
    srand((unsigned)time(NULL));
    int all=0,correct=0,wrong=0;//the three counter
    while(1){
        char choice=menu();
        if(choice=='0'){//exit
            cout<<"Total number of questions you have tried: "<<all<<endl;
            if(wrong==0)cout<<"Correct rate: "<<100<<"%"<<endl;
            else cout<<"Correct rate: "<<(int)((double)(correct*1.0/wrong)*100)<<"%"<<endl;
            break;
        }

        int num1,num2;
        do{
            num1=rand()%90+10;
            num2=rand()%90+10;
        }while(choice=='4'&&(num1%num2!=0||num2==0));//promise the result of divide is int

        decltype(add) *pf;
        char op;
        switch(choice){
            case'1':pf=add;op='+';break;
            case'2':pf=sub;op='-';break;
            case'3':pf=multiply;op='*';break;
            case'4':pf=divide;op='/';break;
            default:continue;
        }

        int answer;
        cout<<num1<<op<<num2<<"=?";
        int cnt=0;
        all++;
        while(cnt<3){
            cin>>answer;cnt++;
            if(answerQuestion(num1,num2,pf,answer)==1){
                cout<<"Correct!"<<endl;
                correct++;
                break;
            }
            else{
                if(cnt==3)cout<<"Wrong and you don't have any chance to try again!"<<endl;
                else{
                    cout<<"Wrong but you still have "<<3-cnt<<" chances to try again, please input your answer again."<<endl;
                    wrong++;
                }
            }
        }
    }
    return 0;
}
