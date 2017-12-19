#include <iostream>

using namespace std;
int main(int argc, char *argv[]){
  int a = atoi(argv[1]);
  switch(a){
    case 1:
      cout << "10" << endl;
      break;
    case 2:
      cout << "20" << endl;
      break;
    default:
      cout << "0" << endl;
      break;
  }
}
