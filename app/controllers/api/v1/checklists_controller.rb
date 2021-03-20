class Api::V1::ChecklistsController < ApplicationController
  def index
    items = Checklist.order(updated_at: :desc)
    render json: items
  end

  def create
    item = Checklist.new(checklist_params)
    if item.save
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  private

  def checklist_params
    params.require(:checklist).permit(
      :title, :username, :finish_at
    )
  end
end
