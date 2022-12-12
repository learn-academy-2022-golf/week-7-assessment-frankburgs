# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This class is a sub class which inherits from the superclass ApplicationController. It is a controller which has methods which serve to pass data around and calls on .erb files for display.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Rails is making every entry in the BlogPost database available to the index route through the instance variable posts.
    @posts = BlogPost.all
  end

  # ---3)
  # The show method is part of the default scaffolding which can be created in a Rails application. In this case the instance variable post is assigned a specific entry in hte BlogPost database found by its id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new method is part of the Rails default scaffolding which generates a new entry in the database. It has available to it an instance variable of a new instance of the BlogPost model.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This is the default method in a database controller for handling creation of new entries.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # The line below makes a specific BlogPost database entry available to the edit path.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This is the default method in a database controller for handling edits for given entries.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # If the user wants to destroy a post and somehow makes the above conditional true, the below happens.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # The private keyword indicates subsequent methods are for internal use only, including validation.
  private
  def blog_post_params
    # ---10)
    # Rails is setting the requirement for a blog_post validation, to include the 'title' and 'content.'
    params.require(:blog_post).permit(:title, :content)
  end
end
