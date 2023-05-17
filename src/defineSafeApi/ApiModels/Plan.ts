export class Plan {
    UserId: string | undefined;
    PlanId: string | undefined;
    Triggers: string[] | undefined;
    CopingSkills: string[] | undefined;

    ToServerModel() {
        return {
            User_Id: this.UserId,
            Plan_Id: this.PlanId,
            Triggers: this.Triggers?.join(","),
            Coping_Skills: this.CopingSkills?.join(",")
        } as ServerPlan;
    }

    FromServerModel(serverPlan: ServerPlan) {
        this.UserId = serverPlan.User_Id;
        this.PlanId = serverPlan.Plan_Id;
        this.Triggers = serverPlan.Triggers.split(",");
        this.CopingSkills = serverPlan.Coping_Skills.split(",");
        return this;
    }
}

export type ServerPlan = {
    User_Id: string,
    Plan_Id: string,
    Triggers: string,
    Coping_Skills: string
}