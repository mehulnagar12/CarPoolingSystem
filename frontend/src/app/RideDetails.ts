export class RideDetails{
    constructor(
        public ride_id =0,
        public origin="",
        public destination="",
        public date="",
        public time="",
        public seats=0,
        public riderName=""
    ){}
}