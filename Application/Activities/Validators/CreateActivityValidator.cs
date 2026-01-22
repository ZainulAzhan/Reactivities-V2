using Application.Activities.Commands;

namespace Application.Activities.Validators;

public class CreateActivityValidator : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
  public CreateActivityValidator() : base(x => x.ActivityDto)
  {

  }
}
