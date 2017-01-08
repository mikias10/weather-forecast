class AppController {
}

const appComponent = {
  template: `
        <div class="container-fluid">          
          <ui-view></ui-view>
        </div>
    `,
  controller: AppController
};

export default appComponent;
