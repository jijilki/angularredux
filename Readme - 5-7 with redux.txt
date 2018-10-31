
Workout tracker to Angular 7.
Error:The serve command requires to be run in an Angular project, but a project definition could not be found.
1. Renamed angular-cli.json to angular.json - Duplicate file.(https://stackoverflow.com/questions/52607924/have-a-new-project-but-when-ng-serve-i-get-error)

Error:Schema validation failed with the following errors: Data path "" should NOT have additional properties(project).
1. Refer the https://update.angular.io/ -  npm install -g rxjs-tslint , rxjs-5-to-6-migrate -p src/tsconfig.app.json -Didnt Workout
2. Replaced package.json with new Angular 7 package.json, Changed the project name. Executed the npm update. Command ran fine.

FIXED
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Renaming .angular-cli.json to .angular.json willl not work as schema is different. 
What I did is,
package.json - replaced with new angular package .json. Don't forget to change project name.
npm install @angular/cli
May require -npm install -g rxjs-tslint , rxjs-5-to-6-migrate -p src/tsconfig.app.json
deleted the .angular-cli.json
copied the angular.json from angular 7 project, rename the project name from all the possible places.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Fusion chart missing. Installed npm install fusioncharts
Property 'map' does not exist on type 'Observable<Response>' - 
Looks like map implementation changed in rxjs Observable in latest versions.
Pipeable Operators

import { map } from 'rxjs/operators';

and wrapped all map inside Pipe

.map 
.pipe(map)