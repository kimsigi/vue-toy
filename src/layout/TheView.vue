<!-- 메인 컨텐츠 영역 (탭 구성) -->
<div class="col-md-10 p-4">
<h4 class="mb-4">
  <i :class="activeSubMenuIcon + ' me-2'"></i>
  {{ activeSubMenuName }}
</h4>

<!-- 탭 네비게이션 -->
<ul class="nav nav-tabs mb-3">
  <li class="nav-item" v-for="tab in tabs" :key="tab.id">
    <button
        class="nav-link position-relative"
        :class="{ 'active': activeTab === tab.id }"
        @click="setActiveTab(tab.id)"
    >
      {{ tab.name }}
      <button
          v-if="tab.closable"
          class="btn-close btn-close-sm position-absolute top-0 end-0"
          style="font-size: 0.5rem; margin-top: 2px; margin-right: 2px;"
          @click.stop="closeTab(tab.id)"
      ></button>
    </button>
  </li>
  <li class="nav-item">
    <button
        class="nav-link text-success"
        @click="addNewTab"
    >
      <i class="bi bi-plus-circle"></i>
    </button>
  </li>
</ul>

<!-- 탭 컨텐츠 -->
<div class="tab-content border border-top-0 rounded-bottom p-3">
  <div v-if="activeTab === 'tab1'">
    <h5>사용자 목록</h5>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>부서</th>
        <th>직책</th>
        <th>이메일</th>
        <th>상태</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in sampleUsers" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.department }}</td>
        <td>{{ user.position }}</td>
        <td>{{ user.email }}</td>
        <td>
          <span :class="'badge bg-' + user.statusColor">{{ user.status }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="activeTab === 'tab2'">
    <h5>대시보드</h5>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h6 class="card-title text-muted">총 사용자</h6>
            <h2 class="mb-0">152</h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h6 class="card-title text-muted">활성 사용자</h6>
            <h2 class="mb-0">98</h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h6 class="card-title text-muted">대기 중인 요청</h6>
            <h2 class="mb-0">24</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="activeTab === 'tab3'">
    <h5>사용자 등록</h5>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputName" class="form-label">이름</label>
        <input type="text" class="form-control" id="inputName">
      </div>
      <div class="col-md-6">
        <label for="inputEmail" class="form-label">이메일</label>
        <input type="email" class="form-control" id="inputEmail">
      </div>
      <div class="col-md-6">
        <label for="inputDepartment" class="form-label">부서</label>
        <select class="form-select" id="inputDepartment">
          <option selected>선택...</option>
          <option>관리부</option>
          <option>영업부</option>
          <option>개발부</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputPosition" class="form-label">직책</label>
        <select class="form-select" id="inputPosition">
          <option selected>선택...</option>
          <option>사원</option>
          <option>대리</option>
          <option>과장</option>
          <option>차장</option>
          <option>부장</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">등록</button>
      </div>
    </form>
  </div>
  <div v-else>
    <p>{{ activeTabName }} 컨텐츠</p>
  </div>
</div>
</div>
<script setup lang="ts">
</script>